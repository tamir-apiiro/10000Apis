
const express = require('express')
import {handler4033} from "./handler4033";
const app = express()
app.get('/4033', handler4033)
app.listen(3000, () => {})
        