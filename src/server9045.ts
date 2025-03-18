
const express = require('express')
import {handler9045} from "./handler9045";
const app = express()
app.get('/9045', handler9045)
app.listen(3000, () => {})
        