
const express = require('express')
import {handler1661} from "./handler1661";
const app = express()
app.get('/1661', handler1661)
app.listen(3000, () => {})
        