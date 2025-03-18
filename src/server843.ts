
const express = require('express')
import {handler843} from "./handler843";
const app = express()
app.get('/843', handler843)
app.listen(3000, () => {})
        