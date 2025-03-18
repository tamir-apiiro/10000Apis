
const express = require('express')
import {handler4298} from "./handler4298";
const app = express()
app.get('/4298', handler4298)
app.listen(3000, () => {})
        