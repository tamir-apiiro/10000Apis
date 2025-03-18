
const express = require('express')
import {handler9087} from "./handler9087";
const app = express()
app.get('/9087', handler9087)
app.listen(3000, () => {})
        