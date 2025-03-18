
const express = require('express')
import {handler296} from "./handler296";
const app = express()
app.get('/296', handler296)
app.listen(3000, () => {})
        