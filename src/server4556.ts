
const express = require('express')
import {handler4556} from "./handler4556";
const app = express()
app.get('/4556', handler4556)
app.listen(3000, () => {})
        