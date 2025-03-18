
const express = require('express')
import {handler4960} from "./handler4960";
const app = express()
app.get('/4960', handler4960)
app.listen(3000, () => {})
        