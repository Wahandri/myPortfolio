import React, { useState, useEffect } from "react";
import "./GitHubInvite.css";

const GitHubInvite = ({ username = "wahandri" }) => {
    const [githubData, setGithubData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [calendarLoaded, setCalendarLoaded] = useState(false);

    // Load GitHub profile data
    useEffect(() => {
        const loadGitHubStats = async () => {
            const apiUrl = `https://api.github.com/users/${username}`;

            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const data = await response.json();
                setGithubData(data);
                setLoading(false);
            } catch (err) {
                console.error("Fallo al cargar datos de GitHub:", err);
                setError(true);
                setLoading(false);
            }
        };

        loadGitHubStats();
    }, [username]);

    // Load github-calendar.js script dynamically
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js';
        script.async = true;
        script.onload = () => setCalendarLoaded(true);
        script.onerror = () => console.error('Failed to load GitHub Calendar script');

        document.body.appendChild(script);

        return () => {
            // Cleanup: remove script when component unmounts
            document.body.removeChild(script);
        };
    }, []);

    // Initialize calendar when both data and script are loaded
    useEffect(() => {
        if (calendarLoaded && githubData && !loading && !error) {
            try {
                // Clear any previous calendar content
                const calendarContainer = document.getElementById('github-calendar');
                if (calendarContainer && window.GitHubCalendar) {
                    calendarContainer.innerHTML = '';
                    window.GitHubCalendar(calendarContainer, username, {
                        responsive: true,
                        tooltips: true,
                        global_stats: false,
                    });

                    // Remove unwanted links after calendar renders
                    setTimeout(() => {
                        // Remove all links within the calendar
                        const allLinks = calendarContainer.querySelectorAll('a');
                        allLinks.forEach(link => {
                            // Remove any link that contains these texts or has these attributes
                            const linkText = link.textContent.trim().toLowerCase();
                            if (linkText.includes('skip') ||
                                linkText.includes('learn') ||
                                linkText.includes('contribution') ||
                                link.hasAttribute('aria-label')) {
                                link.remove();
                            }
                        });

                        // Also remove by class names
                        const elementsToRemove = calendarContainer.querySelectorAll('.contrib-footer, .float-left, .float-right, .f6');
                        elementsToRemove.forEach(el => el.remove());
                    }, 1000);
                }
            } catch (err) {
                console.error('Error initializing GitHub calendar:', err);
            }
        }
    }, [calendarLoaded, githubData, loading, error, username]);

    if (loading) {
        return (
            <div className="github-invite-container">
                <div className="github-card borderCard">
                    <div className="loading">Cargando datos de GitHub...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="github-invite-container">
                <div className="github-card borderCard">
                    <p className="error-msg">
                        No se pudo cargar la info de GitHub.{" "}
                        <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer">
                            Visita mi perfil
                        </a>
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="github-invite-container">
            {/* Section Header */}
            <div className="github-section-header">
                <h3 className="fontTitle">Actividad en GitHub</h3>
                <p className="github-section-subtitle">Sígueme en GitHub para ver mi actividad y contribuciones</p>
            </div>

            <div className="github-card borderCard">
                {/* Sección de perfil */}
                <div className="gh-profile-section">
                    <div className="gh-header">
                        <img
                            src={githubData.avatar_url}
                            alt={`Avatar de ${githubData.login}`}
                            className="gh-avatar"
                        />
                        <div className="gh-info">
                            <a
                                href={githubData.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="gh-name"
                            >
                                {githubData.name || githubData.login}
                            </a>
                            <div className="gh-username">@{githubData.login}</div>
                        </div>
                    </div>

                    {githubData.bio && <p className="gh-bio">{githubData.bio}</p>}

                    <div className="gh-stats">
                        <div className="gh-stat">
                            <span className="gh-stat-value">{githubData.public_repos}</span>
                            <span className="gh-stat-label">Repos</span>
                        </div>
                        <div className="gh-stat">
                            <span className="gh-stat-value">{githubData.followers}</span>
                            <span className="gh-stat-label">Seguidores</span>
                        </div>
                        <div className="gh-stat">
                            <span className="gh-stat-value">{githubData.following}</span>
                            <span className="gh-stat-label">Siguiendo</span>
                        </div>
                    </div>
                </div>

                {/* Contribution Calendar */}
                <div className="gh-calendar-container">
                    <h3 className="gh-calendar-title">Contribuciones</h3>
                    <div id="github-calendar" className="gh-calendar">
                        Cargando calendario de contribuciones...
                    </div>
                </div>

                <a
                    href={githubData.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="github-button myBtn"
                >
                    <svg
                        className="github-button-icon"
                        height="20"
                        viewBox="0 0 16 16"
                        width="20"
                        aria-hidden="true"
                    >
                        <path
                            fill="currentColor"
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                        />
                    </svg>
                    Ver perfil completo
                </a>
            </div>
        </div>
    );
};

export default GitHubInvite;
