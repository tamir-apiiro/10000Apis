
const express = require('express')
import {handler9116} from "./handler9116";
const app = express()
app.get('/9116', handler9116)
app.listen(3000, () => {})
        