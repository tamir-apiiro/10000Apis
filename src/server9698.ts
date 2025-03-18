
const express = require('express')
import {handler9698} from "./handler9698";
const app = express()
app.get('/9698', handler9698)
app.listen(3000, () => {})
        