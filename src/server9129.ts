
const express = require('express')
import {handler9129} from "./handler9129";
const app = express()
app.get('/9129', handler9129)
app.listen(3000, () => {})
        