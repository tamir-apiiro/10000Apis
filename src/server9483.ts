
const express = require('express')
import {handler9483} from "./handler9483";
const app = express()
app.get('/9483', handler9483)
app.listen(3000, () => {})
        