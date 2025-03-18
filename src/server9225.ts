
const express = require('express')
import {handler9225} from "./handler9225";
const app = express()
app.get('/9225', handler9225)
app.listen(3000, () => {})
        