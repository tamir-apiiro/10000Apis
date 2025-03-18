
const express = require('express')
import {handler556} from "./handler556";
const app = express()
app.get('/556', handler556)
app.listen(3000, () => {})
        