
const express = require('express')
import {handler1095} from "./handler1095";
const app = express()
app.get('/1095', handler1095)
app.listen(3000, () => {})
        