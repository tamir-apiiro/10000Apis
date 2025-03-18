
const express = require('express')
import {handler9849} from "./handler9849";
const app = express()
app.get('/9849', handler9849)
app.listen(3000, () => {})
        