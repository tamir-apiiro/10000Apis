
const express = require('express')
import {handler661} from "./handler661";
const app = express()
app.get('/661', handler661)
app.listen(3000, () => {})
        