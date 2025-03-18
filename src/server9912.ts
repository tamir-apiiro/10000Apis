
const express = require('express')
import {handler9912} from "./handler9912";
const app = express()
app.get('/9912', handler9912)
app.listen(3000, () => {})
        