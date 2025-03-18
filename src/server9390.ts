
const express = require('express')
import {handler9390} from "./handler9390";
const app = express()
app.get('/9390', handler9390)
app.listen(3000, () => {})
        