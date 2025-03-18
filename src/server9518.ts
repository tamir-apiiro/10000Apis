
const express = require('express')
import {handler9518} from "./handler9518";
const app = express()
app.get('/9518', handler9518)
app.listen(3000, () => {})
        