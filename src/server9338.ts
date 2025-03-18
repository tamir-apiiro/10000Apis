
const express = require('express')
import {handler9338} from "./handler9338";
const app = express()
app.get('/9338', handler9338)
app.listen(3000, () => {})
        