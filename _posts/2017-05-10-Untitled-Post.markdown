---
layout: post
title: "Euler's Formula"
date: 2017-05-10 11:55:30
excerpt_separator: <!--more-->
---
%%% Research Diary - Entry
%%% Template by Mikhail Klassen, April 2013
%%%
\documentclass[11pt,letterpaper]{article}

\newcommand{\workingDate}{\textsc{2017 $|$ February $|$}}
\newcommand{\userName}{Shehtab Zaman}
\newcommand{\institution}{Binghamton University}
\usepackage{researchdiary_png}
% To add your univeristy logo to the upper right, simply
% upload a file named "logo.png" using the files menu above.

\begin{document}
% \univlogo

\title{Research Diary}

{\Huge February 20}\\[5mm]
% \textit{N.B.: The following is a sample entry from Mikhail Klassen's research diary. It is intended to be illustrative of how WriteLaTeX can be used the keep track of your research progress. Some names have been removed from this document for privacy.}

\section*{Summary of Theory of Superconductivity}
\subsection*{Article Description}
\textbf{Theory of Superconductivity}, J. Bardeen, L.N.Cooper and J.R. Schrieffer \newline
\textit{Department of Physics University of Illinois, Urbana, Illinois} \newline
{\small Physical Review, Volume 108, Number 5}

\subsection*{Background}

The phenomenon of superconductivity was first discovered by Onnes$^1$ in 1911. At that time and for many years after, it was though of simply as the vanishing of all electrical resistance below the \underline{transition } \underline{temperature}.

The next major discovery regarding superconductivity was the discovery of the Meissner Effect$^2$ in 1933. It was shown that a superconductor is a perfect \underline{diamagnet}; the Magnetic flux is excluded from all but a thin penetration region near the surface of the material.

London and London $^3$ expanded on it by proposing a \underline{phenomenological} theory of the electromagnetic properties of super conductors in which the diamagnetic aspects assumed to be basic in 1935.

F. London$^4$ in 1935, suggest a *quantum-theoretic approach to a theory in which it was *assumed that there is somehow a \underline{coherence or rigidity} in the \underline{superconducting state} such that the wave functions are not modified very much when a magnetic field is applied.

Pippard$^5$ in 1953 proposed a nonlocal modification of the aforementioned London equations in which a \underline{coherence distance}, $\xi_{0}$, is introduced. \textbf{The modification was based on experiments on penetration phenomena.}

One of the current authors, J. Bardeen $^6$ pointed out in 1955, that an \underline{energy-gap model} would most likely lead to the Pippard theory.

The preceding theory for metals, the \textbf{Sommerfiled-Bloch theory} states,
\begin{enumerate}[i]
    \item In the \underline{first approximation} one may neglect correlations between the positions of the electrons and assume that each electron moves independently in self consistent field determined by the \underline{conduction} \underline{electrons} and ions.

    \item Wave functions of the metal as a whole are designated by occupation of \underline{Bloch individual-particle states} of energy $\epsilon(k)$ defined by wave vector k and spin $\sigma$
    \item In the ground state all levels with energies below the Fermi energy, $\mathscr{E}_F$ are occupied and above are unoccupied.
\end{enumerate}
One of the key motivators of the paper and BCS theory is pointed out in the article as the deficiencies of the \textbf{Sommerfield-Bloch Individual Particle Model}.

They can be characterized as:
\begin{enumerate}[i]
    \item Although a fairly good description of normal metals, the model fails to account of superconductivity

    \item The \underline{correlations} between electrons brought about by coulomb forces and interactions between electrons and \underline{lattice vibrations (phonos)} are neglected.  
\end{enumerate}

\subsection*{Requirements for a Theory of Superconductivity}
According to the paper, the "main facts which a theory of Superconductivity" must explain" are:
\begin{enumerate}
    \item A second order phase transition at the Critical Temperature, $T_{c}$
    \item An electronic specific heat varying as $exp({\frac{-T_0}{T}})$ and other evidence of energy gap for individual particle-like excitations.
    \item The Meissner-Oschenfeld Effect
    \item Effects associated with infinite conductivity
    \item The dependence of $T_c$ on isotropic mass. $T_c\sqrt{M} = Const.$
\end{enumerate}
\subsection*{BCS Theory}
\begin{itemize}
    \item One of the main criterion for a superconducting phase is that for for low energy transitions
    \newline($\Delta e < hw$), the electron-phonon interaction (which is attractive) dominates the repulsive coulomb interaction. This type of attractive of interaction can give rise to a \underline{cooperative many-particle state}.
    \item The most important contribution is given by \underline{short wavelength} phonons.
    \item The Meissner effect is intimately related to the the existence of \underline{an energy gap}.
    \item Superconducting properties are not dependent on the band structure but rather the gross features.
    \item In the ground state, the interaction that produces the energy difference between normal and superconducting phases arise from the exchange of phonons and the screened Coulomb repulsion between electrons.
    \item Other interactions are essentially the same between normal and superconducting phases.
    \item Phonons are \underline{decoupled} from the electrons by a \underline{renormalization} procedure and the frequencies are though to be unaltered between phase transitions. (Phonons are the same from temperature changes?)

\end{itemize}
\subsection*{Important Equations}
London Equation with Vector Potential A:
\begin{equation} \label{eq1}
\begin{split}
j_s = - \frac{n_s e^2}{m}A
\end{split}
\end{equation}
London Penetration Depth:
\begin{align*}
    \nabla ^2 \mathbf{B} = \frac{1}{\lambda^2}\mathbf{B}, &&  \lambda \equiv \sqrt{\frac{m}{\mu_0 n_s e^2}}
\end{align*}
Hamiltonian for Excited State of Superconductor,
\begin{equation} \label{eq1}
\begin{split}
H = \sum_{k>k_F}\epsilon_kn_{k\sigma} + \sum_{k<k_F}|\epsilon_k|(1-n_{k\sigma}) + H_{Cout}+ \frac{1}{2} \sum^{}_{k,k^{'},\sigma,\sigma^{'},\kappa}\frac{2\hslash w_k|M_\kappa|^2c^{\dagger}(k^{'} - \kappa,\sigma^{'})c^(k^{'},\sigma^{'})c^{\dagger}(k^{'} + \kappa,\sigma^{'})c^(k,\sigma)}{(\epsilon_k - \epsilon_{k+\kappa})^2}
\end{split}
\end{equation}
The fourth term on the right, $H_2$ is the phonon interaction, which comes from virtual exhchange of phononts between the electrons.
$$H_2 =\frac{1}{2} \sum^{}_{k,k^{'},\sigma,\sigma^{'},\kappa}\frac{2\hslash w_k|M_\kappa|^2c^{\dagger}(k^{'} - \kappa,\sigma^{'})c^(k^{'},\sigma^{'})c^{\dagger}(k^{'} + \kappa,\sigma^{'})c^(k,\sigma)}{(\epsilon_k - \epsilon_{k+\kappa})^2}$$

This interaction is attractive when the energy difference, $\Delta \epsilon$, between the electron states involved is less than $\hslash w$.
\newline
The criterion for for the occurrence of a superconducting phase for $\Delta \epsilon < \hslash $ the attractive $H_2$ dominates the repulsive the repulsive short-range Coulomb Interaction, $H_{Cout}$
\newpage
\subsection*{Notes}
\underline{Transition Temperature:} Critical temperature at which the electrical resistivity of the metal drops to zero. The change is sudden and complete. Almost akin to phase transition of matter. \newline
\underline{Diamagnetism:} Repulsion to applied magnetic field. Quantum mechanical effect that induces magnetic fields in the material opposing magnetic attraction.\newline
\underline{Phenomenological Theory:} Theory based on the experimental data \newline
\underline{Coherence or Rigidity:} (Unsure in context to Wavefunction)\newline
\underline{Superconducting State:} Does the wavefunction change when there is a phase  transition? \newline
\underline{Coherence Distance:} Spatial changes in quantities, especially relating to phrase transitions have a lower bound, $\xi_0$.\newline
\underline{First Approximation:}Linear approximation terms. Shows the largest contribution to the model described.\newline
\underline{Conduction Electron:}Non localized/ free electrons\newline
\underline{Bloch Individual Particle State:} \newline
\underline{Electron Correlation:}Interaction between electrons.Coherence energy is the energy related to the coulomb interaction of all other electrons. \newline
\underline{Lattice Vibrations (Phonons):} Vibrational energy associated with a lattice. Quasi-particle used to model mathematically.\newline
\underline{Energy Gap:} \newline
\underline{Decoupling:} \newline
\underline{Renormalization:}\newline
\subsection*{References}
1. H.K Onnes, Comm. Phys. Lab. univ. Leiden, Nos, 119,120,122(1911)\newline
2. W. Meissner and R. Ochsenfield, Naturwiss. 21, 787 (1933) \newline
3. H. London and F. London, Proc, Roy, Soc. (London)A149,71(1935);Physica 2, 341(1935)\newline
4. F. Londonm Proc. Roy. Soc (London). A152, 24 (1935); PHYS. Rev. 74, 562(1948)\newline
5. A.B. Pippard, Proc. Roy. Soc.(London) A216, 547 (1953).\newline
6. J. Bardeen, Phys. Rev. 97, 1724 (1955). \newline


\end{document}
