
const express = require('express')
import {handler9067} from "./handler9067";
const app = express()
app.get('/9067', handler9067)
app.listen(3000, () => {})
        