
const express = require('express')
import {handler9775} from "./handler9775";
const app = express()
app.get('/9775', handler9775)
app.listen(3000, () => {})
        