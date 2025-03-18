
const express = require('express')
import {handler9140} from "./handler9140";
const app = express()
app.get('/9140', handler9140)
app.listen(3000, () => {})
        