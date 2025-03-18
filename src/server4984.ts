
const express = require('express')
import {handler4984} from "./handler4984";
const app = express()
app.get('/4984', handler4984)
app.listen(3000, () => {})
        