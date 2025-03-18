
const express = require('express')
import {handler4296} from "./handler4296";
const app = express()
app.get('/4296', handler4296)
app.listen(3000, () => {})
        