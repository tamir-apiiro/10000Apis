
const express = require('express')
import {handler9056} from "./handler9056";
const app = express()
app.get('/9056', handler9056)
app.listen(3000, () => {})
        