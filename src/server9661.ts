
const express = require('express')
import {handler9661} from "./handler9661";
const app = express()
app.get('/9661', handler9661)
app.listen(3000, () => {})
        