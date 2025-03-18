
const express = require('express')
import {handler9798} from "./handler9798";
const app = express()
app.get('/9798', handler9798)
app.listen(3000, () => {})
        