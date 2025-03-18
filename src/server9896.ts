
const express = require('express')
import {handler9896} from "./handler9896";
const app = express()
app.get('/9896', handler9896)
app.listen(3000, () => {})
        