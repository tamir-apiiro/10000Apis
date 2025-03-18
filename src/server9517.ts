
const express = require('express')
import {handler9517} from "./handler9517";
const app = express()
app.get('/9517', handler9517)
app.listen(3000, () => {})
        