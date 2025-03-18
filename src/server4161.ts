
const express = require('express')
import {handler4161} from "./handler4161";
const app = express()
app.get('/4161', handler4161)
app.listen(3000, () => {})
        