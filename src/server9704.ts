
const express = require('express')
import {handler9704} from "./handler9704";
const app = express()
app.get('/9704', handler9704)
app.listen(3000, () => {})
        