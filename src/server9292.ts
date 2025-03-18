
const express = require('express')
import {handler9292} from "./handler9292";
const app = express()
app.get('/9292', handler9292)
app.listen(3000, () => {})
        