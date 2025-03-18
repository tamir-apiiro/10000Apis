
const express = require('express')
import {handler9934} from "./handler9934";
const app = express()
app.get('/9934', handler9934)
app.listen(3000, () => {})
        