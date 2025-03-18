
const express = require('express')
import {handler4845} from "./handler4845";
const app = express()
app.get('/4845', handler4845)
app.listen(3000, () => {})
        