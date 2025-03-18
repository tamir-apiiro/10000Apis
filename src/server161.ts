
const express = require('express')
import {handler161} from "./handler161";
const app = express()
app.get('/161', handler161)
app.listen(3000, () => {})
        