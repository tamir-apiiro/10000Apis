
const express = require('express')
import {handler7862} from "./handler7862";
const app = express()
app.get('/7862', handler7862)
app.listen(3000, () => {})
        