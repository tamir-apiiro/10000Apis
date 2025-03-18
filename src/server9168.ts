
const express = require('express')
import {handler9168} from "./handler9168";
const app = express()
app.get('/9168', handler9168)
app.listen(3000, () => {})
        