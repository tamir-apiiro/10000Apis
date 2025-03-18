
const express = require('express')
import {handler9664} from "./handler9664";
const app = express()
app.get('/9664', handler9664)
app.listen(3000, () => {})
        