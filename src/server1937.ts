
const express = require('express')
import {handler1937} from "./handler1937";
const app = express()
app.get('/1937', handler1937)
app.listen(3000, () => {})
        