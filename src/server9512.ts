
const express = require('express')
import {handler9512} from "./handler9512";
const app = express()
app.get('/9512', handler9512)
app.listen(3000, () => {})
        