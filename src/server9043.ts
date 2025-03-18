
const express = require('express')
import {handler9043} from "./handler9043";
const app = express()
app.get('/9043', handler9043)
app.listen(3000, () => {})
        