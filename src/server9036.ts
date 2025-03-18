
const express = require('express')
import {handler9036} from "./handler9036";
const app = express()
app.get('/9036', handler9036)
app.listen(3000, () => {})
        