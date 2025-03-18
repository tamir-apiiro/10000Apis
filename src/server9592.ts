
const express = require('express')
import {handler9592} from "./handler9592";
const app = express()
app.get('/9592', handler9592)
app.listen(3000, () => {})
        