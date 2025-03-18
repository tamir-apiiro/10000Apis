
const express = require('express')
import {handler4896} from "./handler4896";
const app = express()
app.get('/4896', handler4896)
app.listen(3000, () => {})
        