
const express = require('express')
import {handler9873} from "./handler9873";
const app = express()
app.get('/9873', handler9873)
app.listen(3000, () => {})
        