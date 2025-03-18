
const express = require('express')
import {handler4862} from "./handler4862";
const app = express()
app.get('/4862', handler4862)
app.listen(3000, () => {})
        