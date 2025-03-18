
const express = require('express')
import {handler9289} from "./handler9289";
const app = express()
app.get('/9289', handler9289)
app.listen(3000, () => {})
        