
const express = require('express')
import {handler9720} from "./handler9720";
const app = express()
app.get('/9720', handler9720)
app.listen(3000, () => {})
        